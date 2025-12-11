import { FC, useRef, useState } from "react";
import { useCycle } from "../../context/CycleContext";
import { IonChip, IonContent, IonItem, IonLabel, IonList, IonPopover } from "@ionic/react";
import { caretForwardOutline, checkmarkOutline } from "ionicons/icons";

type Stage = "Egg" | "Larva" | "Pupa" | "Adult"

const CycleButton: FC = () => {
    const { stage, setStage } = useCycle();
    const popover = useRef<HTMLIonPopoverElement>(null);
    const [popoverOpen, setPopoverOpen] = useState(false);

    const stages: Array<Stage> = ["Egg", "Larva", "Pupa", "Adult"]

    const openPopover = (e: any) => {
        popover.current!.event = e;
        setPopoverOpen(true);
    };

    return (
        <IonChip onClick={openPopover}>
            <IonLabel>{stage} Stage</IonLabel>
            <IonPopover side="left" alignment="start" ref={popover} isOpen={popoverOpen} onDidDismiss={() => setPopoverOpen(false)}>
                <IonContent>
                    <IonList>
                        {stages.map((currentStage) => (
                            <IonItem
                                key={currentStage}
                                button
                                detail
                                color={currentStage === stage ? "primary" : ""}
                                detailIcon={
                                    currentStage === stage
                                        ? checkmarkOutline
                                        : caretForwardOutline
                                }
                                onClick={() => {
                                    popover.current?.dismiss();
                                    setStage(currentStage);
                                }}
                            >
                                {currentStage} Stage
                            </IonItem>
                        ))}
                    </IonList>
                </IonContent>
            </IonPopover>
        </IonChip >
    )
}

export default CycleButton
