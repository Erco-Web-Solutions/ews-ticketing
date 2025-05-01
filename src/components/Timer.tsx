import React, { useEffect, useRef, useState } from "react";
import { timerService } from "../services/timer-service";

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(7200); // Initial time: 2 hours
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [showReset, setShowReset] = useState<boolean>(false);
  const [newTime, setNewTime] = useState<string>("7200");
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialiser le timer depuis Firebase
    const initializeTimer = async () => {
      try {
        const timerState = await timerService.getTimerState();
        setTimeLeft(Math.max(0, timerState.timeLeft));
        setIsActive(timerState.isActive);
        setIsExpired(timerState.isExpired);
      } catch (error) {
        console.error("Error initializing timer:", error);
        setTimeLeft(7200);
      }
    };

    initializeTimer();

    // S'abonner aux mises à jour du timer
    const unsubscribe = timerService.subscribeToTimer((state) => {
      setTimeLeft(Math.max(0, state.timeLeft));
      setIsActive(state.isActive);
      setIsExpired(state.isExpired);
    });

    return () => {
      unsubscribe();
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isActive && !isExpired) {
      // Démarrer l'intervalle local
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = Math.max(0, prevTime - 1);
          if (newTime === 0) {
            setIsExpired(true);
            if (timerRef.current) {
              clearInterval(timerRef.current);
            }
          }
          return newTime;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, isExpired]);

  const startTimer = async () => {
    try {
      setIsActive(true);
      await timerService.startTimer();
    } catch (error) {
      console.error("Error starting timer:", error);
      setIsActive(false);
    }
  };

  const handleReset = async () => {
    try {
      const seconds = parseInt(newTime);
      if (!isNaN(seconds) && seconds > 0) {
        await timerService.resetTimer(seconds);
        // Ne pas mettre à jour l'état local ici, laisser Firebase gérer la mise à jour
      }
    } catch (error) {
      console.error("Error resetting timer:", error);
    }
  };

  const formatTime = (seconds: number): string => {
    if (isNaN(seconds) || seconds < 0) {
      return "02:00:00";
    }
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  if (isExpired) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Temps écoulé !</h2>
          <p className="text-gray-600">
            Le temps imparti de 2 heures est terminé.
          </p>
          <p className="text-gray-600 mt-2">
            La page se fermera automatiquement.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-blue-500">
        <div className="text-4xl font-bold mb-4 text-blue-600">
          {formatTime(timeLeft)}
        </div>
        <div className="flex flex-col gap-4">
          {!isActive && (
            <button
              onClick={startTimer}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Démarrer le Timer
            </button>
          )}
          <button
            onClick={() => setShowReset(!showReset)}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            {showReset
              ? "Masquer la réinitialisation"
              : "Afficher la réinitialisation"}
          </button>
          {showReset && (
            <div className="flex flex-col gap-2">
              <input
                type="number"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2"
                placeholder="Temps en secondes"
                min="1"
              />
              <button
                onClick={handleReset}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
              >
                Réinitialiser le Timer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;
