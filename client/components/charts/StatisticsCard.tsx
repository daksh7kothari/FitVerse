import React from "react";
import Card from "@/components/common/Card";

interface StatisticsCardProps {
  icon: string;
  label: string;
  value: string | number;
  unit?: string;
  bgGradient: string;
  textColor: string;
}

export default function StatisticsCard({
  icon,
  label,
  value,
  unit,
  bgGradient,
  textColor,
}: StatisticsCardProps) {
  return (
    <Card className={`text-center ${bgGradient} p-8`}>
      <p className="text-sm font-semibold text-gray-600 mb-3">
        {icon} {label}
      </p>
      <p className={`text-4xl font-bold ${textColor} font-mono mb-2`}>
        {value}
      </p>
      {unit && <p className="text-xs text-gray-600">{unit}</p>}
    </Card>
  );
}
