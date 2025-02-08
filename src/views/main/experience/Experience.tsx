import styled from './experience.module.scss';

type experience = {
    name: string;
    icon: string;
    description: string;
    year: string;
};
// type Props = {}

export const Experience = () => {
    const experience: experience[] = [
        {
            name: 'Start',
            icon: 'fa-flag',
            description: 'Zainteresowanie się programowaniem',
            year: '01.01.2022',
        },
        {
            name: 'Pierwszy Kurs',
            icon: 'fa-file-code',
            description: 'Wykupienie pierwszego Kursu HTML I CSS',
            year: '01.02.2022',
        },
        {
            name: "Pierwsza własna strona",
            icon: "fa-globe",
            description: "Po pierwszym kursie, udało mi się zrobić swoją pierwszą stronę",
            year: "01.03.2022"
        },
        {
            name: "Kurs JavaScript",
            icon: "fa-brands fa-js",
            description: "Pierwszy kurs JavaScript",
            year: "15.03.2022"
        },
        {
            name: "Pierwsze kroki w Javascrip",
            icon: "fa-rocket",
            description: "pierwsze napisane samodzielnie aplikację typu notatnik, kalkulator",
            year: "01.05.2022",
        },
        {
            name: "Pierwsza komerycjna strona",
            icon: "fa-star",
            description: "Pierwsza stronka stworzona dla znajomego",
            year: "16.07-2022",
        },
        {
            name: "Pierwsza aplikacja webowa",
            icon: "fa-file",
            description: "Okazja w uwczesnej pracy aby napisać apliakcje, formularza zgłoszeń reklamacyjnych",
            year: "10.11.2022"
        },
        {
            name: "Rozpoczęcie wysyłania CV",
            icon: "fa-envelope",
            description: "Rozpoczęcie szukania pierwszej pracy jako Junior Front-End",
            year: "01.01.2023",
        },
        {
            name: "Pierwsza praca",
            icon: "fa-fire",
            description: "Dostanie pierwszej pracy jako Junior Front-End",
            year: "15.06.2023"
        }
    ];

    return (
        <div className='section-color'>
            <div className='app-wrapper'>
                <div className={styled.experienceWrapper}>
                    <h2>Moja krótka historia</h2>

                    <div className={styled.experienceList}>
                        {experience.map((el) => {
                            return (
                                <div key={el.name} className={styled.experienceItem}>
                                    <div className={styled.experienceItemIcon}>
                                        <i className={`${el.icon} fa-solid`}></i>
                                    </div>
                                    <div className={styled.experienceItemInfo}>
                                        <span className={styled.experienceItemInfoTitle}>{el.name}</span>
                                        <span className={styled.experienceItemInfoDescription}>{el.description}</span>
                                    </div>
                                    <div className={styled.experienceItemDate}>{el.year}</div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={`${styled.experienceImageSide}`}></div>
                </div>
            </div>
        </div>
    );
};
