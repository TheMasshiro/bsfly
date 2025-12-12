import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonToggle, ToggleCustomEvent, useIonToast } from "@ionic/react";
import { FC, useEffect, useRef, useState } from "react";
import "./Controls.css"
import { platform } from "../../App";
import { socket } from "../../services/socket/socket";


interface ControlToggleProps {
    cardTitle: string,
    description: string
}

export const ControlToggle: FC<ControlToggleProps> = ({ description, cardTitle }) => {
    const toggleRef = useRef<HTMLIonToggleElement>(null);

    const [isTouched, setIsTouched] = useState<boolean>();
    const [isValid, setIsValid] = useState<boolean | undefined>();
    const [isChecked, setIsChecked] = useState<boolean>();

    const [message, setMessage] = useState<boolean>(false)
    const [messageReceived, setMessageReceived] = useState<boolean>(false)


    const [present] = useIonToast()
    const presentToast = (message: string, duration: number) => {
        present({
            message: message,
            duration: duration,
            position: "top",
            mode: "ios",
            layout: "stacked",
            swipeGesture: "vertical",
        })
    }

    const validateToggle = (event: ToggleCustomEvent<{ checked: boolean }>) => {
        setIsTouched(true);
        setIsChecked(event.detail.checked);
        setIsValid(event.detail.checked);
        const message = event.detail.checked ? `${cardTitle} turned on` : `${cardTitle} turned off`;
        presentToast(message, 700);
    };

    const toggleSent = () => {
        socket.emit("send_message", { message: message })
    }

    const toggleReceived = () => {
        socket.on("received_message", (data) => {
            setMessageReceived(data.message)
            alert(messageReceived)
        })
    }

    return (
        <IonCard mode="ios">
            <IonCardHeader>
                <IonCardTitle>{cardTitle}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonToggle enableOnOffLabels={true}
                    ref={toggleRef}
                    className={`${isValid ? 'ion-valid' : ''} ${isValid === false ? 'ion-invalid' : ''} ${isTouched ? 'ion-touched' : ''
                        }`}
                    justify="space-between"
                    checked={isChecked}
                    onIonChange={(event) => {
                        validateToggle(event)
                        setMessage(event.detail.checked)
                        toggleSent()
                        toggleReceived()
                        console.log(event.detail.checked)
                    }}
                >
                    {description}
                </IonToggle>
            </IonCardContent>
        </IonCard>
    );
}

interface TimeProps {
    id: number,
    name: string,
    seconds: number
}

export const TimeSelection: FC = () => {
    const compareWith = (o1: TimeProps, o2: TimeProps) => {
        return o1.id === o2.id
    }

    const timers: TimeProps[] = [
        {
            id: 1,
            name: 'Disabled',
            seconds: 0,
        },
        {
            id: 2,
            name: '8 Hours',
            seconds: 28800,
        },
        {
            id: 3,
            name: '12 Hours',
            seconds: 43200,
        },

    ]
    const [selectedTime, setSelectedTime] = useState<TimeProps>(timers[0]);

    const [present] = useIonToast()
    const presentToast = (message: string, duration: number) => {
        present({
            message: message,
            duration: duration,
            position: "top",
            mode: "ios",
            layout: "stacked",
            swipeGesture: "vertical",
        })
    }

    return (
        <IonCard className={platform.includes('ios') ? 'ios-card' : 'md-card'}>
            <IonCardHeader>
                <IonCardSubtitle>Set time for light</IonCardSubtitle>
                <IonCardTitle>Light</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList lines="none">
                    <IonRadioGroup
                        value={selectedTime}
                        compareWith={compareWith}
                        onIonChange={(event) => {
                            console.log('Current value:', JSON.stringify(event.detail.value))
                            setSelectedTime(event.detail.value)
                        }}
                    >
                        {timers.map((timer) => (
                            <IonItem key={timer.id} lines="none">
                                <IonRadio key={timer.id} value={timer}>
                                    <IonLabel>{timer.name}</IonLabel>
                                </IonRadio>
                            </IonItem>
                        ))}
                    </IonRadioGroup>
                </IonList>
            </IonCardContent>
        </IonCard>
    );
}
