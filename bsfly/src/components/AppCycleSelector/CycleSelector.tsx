import { FC, useEffect, useRef, useState } from "react";
import { useCycle } from "../../context/CycleContext";
import { IonChip, IonContent, IonIcon, IonItem, IonLabel, IonList, IonPopover } from "@ionic/react";
import { caretForwardOutline, checkmarkOutline, ellipse } from "ionicons/icons";
import { socket } from "../../services/socket/socket";

type Stage = "Egg" | "Larva" | "Pupa" | "Adult"

const CycleButton: FC = () => {
    const { stage, setStage } = useCycle();
    const popover = useRef<HTMLIonPopoverElement>(null);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [isConnected, setIsConnected] = useState(socket.connected);

    const stages: Array<Stage> = ["Egg", "Larva", "Pupa", "Adult"]

    const openPopover = (e: any) => {
        popover.current!.event = e;
        setPopoverOpen(true);
    };

    const setIndicator = isConnected ? "success" : "danger";

    useEffect(() => {
        const onConnect = () => setIsConnected(true);
        const onDisconnect = () => setIsConnected(false);

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
        };
    }, []);

    return (
        <IonChip onClick={openPopover} color={setIndicator}>
            <IonIcon icon={ellipse} color={setIndicator}></IonIcon>
            <IonLabel>{stage} Stage</IonLabel>
            <IonPopover side="right" alignment="start" ref={popover} isOpen={popoverOpen} onDidDismiss={() => setPopoverOpen(false)}>
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
