import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import { getStatus, lifecycleThresholds, Threshold } from "../../config/thresholds";
import { useCycle } from "../../context/CycleContext";
import { displayTime, secondsToTime } from "../../utilities/utils";
import { FC } from "react";

const sensorTypeMap: Record<string, string> = {
    "photoperiod": "photoperiod",
    "temperature": "temperature",
    "humidity": "humidity",
    "substrate moisture": "moisture",
    "ammonia": "ammonia",
};

export const statusColor = (sensorType: string, value: number, thresholds: any) => {
    return sensorType
        ? getStatus(value, thresholds[sensorType] as Threshold)
        : "medium";
}

export const getOptimals = (sensorType: string, thresholds: any) => {
    if (sensorType === "photoperiod") {
        return `Optimal: ${displayTime(thresholds[sensorType].optimal[0])}-${displayTime(thresholds[sensorType].optimal[1])}`
    }
    return `Optimal: ${thresholds[sensorType].optimal[0]}-${thresholds[sensorType].optimal[1]}`
}

interface SensorCardProps {
    title: string,
    value: number,
    unit: string,
}

const SensorCard: FC<SensorCardProps> = ({ title, value, unit }) => {
    const { stage } = useCycle()
    const thresholds = lifecycleThresholds[stage]
    const sensorType = sensorTypeMap[title.toLowerCase()]

    const displayValue = title.toLowerCase() === "photoperiod"
        ? `${secondsToTime(value)} left`
        : `${value}${unit}`;


    return (
        <IonCard mode="ios" color={statusColor(sensorType, value, thresholds)}>
            <IonCardHeader>
                <IonCardTitle>{displayValue}</IonCardTitle>
                <IonCardSubtitle>{title}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>{getOptimals(sensorType, thresholds)}{unit}</IonCardContent>
        </IonCard>
    );
}
export default SensorCard;
