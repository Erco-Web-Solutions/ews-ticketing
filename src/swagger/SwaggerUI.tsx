import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { swaggerSpec } from "./swagger-spec";

const ApiDocs: React.FC = () => {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-6">API Documentation</h1>
      <div className="bg-white p-4 rounded shadow">
        <SwaggerUI spec={swaggerSpec} />
      </div>
    </div>
  );
};

export default ApiDocs;
