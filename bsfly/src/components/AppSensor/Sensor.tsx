import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import { getStatus, lifecycleThresholds, Threshold } from "../../config/thresholds";
import { useCycle } from "../../context/CycleContext";
import { secondsToTime } from "../../utilities/utils";
import { FC } from "react";

const sensorTypeMap: Record<string, string> = {
    "photoperiod": "photoperiod",
    "temperature": "temperature",
    "humidity": "humidity",
    "substrate moisture": "moisture",
    "ammonia": "ammonia",
};

export const statusColor = (title: string, value: number, thresholds: any) => {
    const sensorType = sensorTypeMap[title.toLowerCase()];
    return sensorType
        ? getStatus(value, thresholds[sensorType] as Threshold)
        : "medium";
}

interface SensorCardProps {
    title: string,
    value: number,
    unit: string,
}

const SensorCard: FC<SensorCardProps> = ({ title, value, unit }) => {
    const { stage } = useCycle()
    const thresholds = lifecycleThresholds[stage]

    const displayValue = title.toLowerCase() === "photoperiod"
        ? `${secondsToTime(value)} left`
        : `${value}${unit}`;


    return (
        <IonCard mode="ios" color={statusColor(title, value, thresholds)}>
            <IonCardHeader>
                <IonCardTitle>{displayValue}</IonCardTitle>
                <IonCardSubtitle>{title}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>Updated 2m ago.</IonCardContent>
        </IonCard>
    );
}
export default SensorCard;
