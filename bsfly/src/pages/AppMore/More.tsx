import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, RouterDirection, useIonRouter } from '@ionic/react';
import './More.css';
import { FC } from 'react';
import { eyeOutline, informationCircleOutline, saveOutline, settingsOutline } from 'ionicons/icons';

const MorePage: FC = () => {
    const router = useIonRouter()
    const dynamicNavigate = (path: string, direction: RouterDirection) => {
        const action = direction === "forward" ? "push" : "pop";
        router.push(path, direction, action)
    }

    const options = [
        {
            name: "View Data",
            body: "View Backed Up Data",
            icon: eyeOutline,
            onClick: () => console.log("View Data Clicked")
        },
        {
            name: "Backup Data",
            body: "Manually Backup Data (Will overrite last backed up data",
            icon: saveOutline,
            onClick: () => console.log("Backup Data Clicked")
        },
        {
            name: "Settings",
            body: "Open settings",
            icon: settingsOutline,
            onClick: () => dynamicNavigate("/more/settings", "forward")
        },
        {
            name: "About",
            body: "About BSFly",
            icon: informationCircleOutline,
            onClick: () => dynamicNavigate("/more/about", "forward")
        },
    ]

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen={true}>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList inset={true}>
                    {options.map((option, index) => (
                        <IonItem key={index} button onClick={() => { option.onClick() }}>
                            <IonIcon aria-hidden="true" icon={option.icon} slot="start" size="large"></IonIcon>
                            <IonLabel>
                                {option.name}
                            </IonLabel>
                        </IonItem>
                    ))
                    }
                </IonList>
            </IonContent>
        </IonPage >
    );
};

export default MorePage;
