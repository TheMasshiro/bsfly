import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar, RouterDirection, useIonRouter } from '@ionic/react';
import './More.css';
import { FC } from 'react';
import { informationCircleOutline, settingsOutline } from 'ionicons/icons';

interface ClickableCardProps {
    title: string,
    icon?: string,
    content: string,
    onClick?: () => void
}

const ClickableCard: FC<ClickableCardProps> = ({ title, icon, content, onClick }) => {
    return (
        <IonCard mode="ios" button onClick={onClick} style={{ cursor: 'pointer' }}>
            <IonCardHeader className="selected-ion-card-header">
                <IonCardSubtitle>
                    {content}
                </IonCardSubtitle>
                <IonCardTitle>
                    {title}</IonCardTitle>
                <IonIcon icon={icon} size="large" className="center-right"></IonIcon>
            </IonCardHeader>
        </IonCard>
    );
}

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
            onClick: () => console.log("View Data Clicked")
        },
        {
            name: "Backup Data",
            body: "Manually Backup Data (Will overrite last backed up data",
            onClick: () => console.log("Backup Data Clicked")
        },
        {
            name: "Settings",
            icon: settingsOutline,
            body: "Open settings",
            onClick: () => dynamicNavigate("/more/settings", "forward")
        },
        {
            name: "About",
            icon: informationCircleOutline,
            body: "About BSFly",
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
                <IonGrid>
                    {options.map((option, index) => (
                        <IonRow key={index}>
                            <IonCol>
                                <ClickableCard
                                    key={index}
                                    title={option.name}
                                    icon={option.icon}
                                    content={option.body}
                                    onClick={option.onClick}
                                >
                                </ClickableCard>
                            </IonCol>
                        </IonRow>
                    ))}
                    <IonRow>
                        <IonCol>
                            <IonCard mode="ios">
                                <IonCardHeader>
                                    <IonCardSubtitle>Data will be backed up every day at midnight</IonCardSubtitle>
                                    <IonCardTitle>Automatic Backup</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage >
    );
};

export default MorePage;
