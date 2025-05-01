import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

interface TimerState {
  endTime: number | null; // Timestamp when the timer should end
  isActive: boolean;
  isExpired: boolean;
  initialTime: number; // Initial time in seconds
}

const TIMER_COLLECTION = "timers";
const TIMER_DOC = "interview-timer";
const TOTAL_TIME = 7200; // 2 hours in seconds

export const timerService = {
  async getTimerState(): Promise<TimerState & { timeLeft: number }> {
    const timerRef = doc(db, TIMER_COLLECTION, TIMER_DOC);
    const timerSnap = await getDoc(timerRef);

    if (timerSnap.exists()) {
      const data = timerSnap.data() as TimerState;
      if (data.isActive && data.endTime) {
        const currentTime = Date.now();
        if (currentTime >= data.endTime) {
          await this.stopTimer();
          return { ...data, isActive: false, isExpired: true, timeLeft: 0 };
        }
        const timeLeft = Math.floor((data.endTime - currentTime) / 1000);
        return { ...data, timeLeft };
      }
      return { ...data, timeLeft: data.initialTime };
    }

    return {
      endTime: null,
      isActive: false,
      isExpired: false,
      initialTime: TOTAL_TIME,
      timeLeft: TOTAL_TIME,
    };
  },

  async startTimer(): Promise<void> {
    const timerRef = doc(db, TIMER_COLLECTION, TIMER_DOC);
    const timerSnap = await getDoc(timerRef);
    const currentTime = Date.now();

    if (timerSnap.exists()) {
      const data = timerSnap.data() as TimerState;
      const endTime = currentTime + data.initialTime * 1000;

      await setDoc(
        timerRef,
        {
          endTime,
          isActive: true,
          isExpired: false,
          initialTime: data.initialTime,
        },
        { merge: true }
      );
    } else {
      const endTime = currentTime + TOTAL_TIME * 1000;
      await setDoc(
        timerRef,
        {
          endTime,
          isActive: true,
          isExpired: false,
          initialTime: TOTAL_TIME,
        },
        { merge: true }
      );
    }
  },

  async stopTimer(): Promise<void> {
    const timerRef = doc(db, TIMER_COLLECTION, TIMER_DOC);
    await setDoc(
      timerRef,
      {
        isActive: false,
        endTime: null,
        isExpired: true,
        initialTime: TOTAL_TIME,
      },
      { merge: true }
    );
  },

  async resetTimer(newTimeInSeconds: number): Promise<void> {
    const timerRef = doc(db, TIMER_COLLECTION, TIMER_DOC);
    const currentTime = Date.now();
    const endTime = currentTime + newTimeInSeconds * 1000;

    await setDoc(
      timerRef,
      {
        endTime,
        isActive: false,
        isExpired: false,
        initialTime: newTimeInSeconds,
        timeLeft: newTimeInSeconds,
      },
      { merge: true }
    );
  },

  subscribeToTimer(
    callback: (state: TimerState & { timeLeft: number }) => void
  ): () => void {
    const timerRef = doc(db, TIMER_COLLECTION, TIMER_DOC);
    return onSnapshot(timerRef, async (doc) => {
      if (doc.exists()) {
        const data = doc.data() as TimerState;
        if (data.isActive && data.endTime) {
          const currentTime = Date.now();
          if (currentTime >= data.endTime) {
            await this.stopTimer();
            callback({ ...data, timeLeft: 0 });
            // Forcer la fermeture de la page
            window.location.href = "about:blank";
            return;
          }
          const timeLeft = Math.floor((data.endTime - currentTime) / 1000);
          callback({ ...data, timeLeft });
        } else {
          callback({ ...data, timeLeft: data.initialTime });
        }
      }
    });
  },
};
