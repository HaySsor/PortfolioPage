import styled from './about-me.module.scss'

export const AboutMe = () => {
    return (
        <div className='section-color'>
            <div className='app-wrapper'>
                <div className={styled.aboutMeWrapper}>
                    <h2>O mnie</h2>
                    <div className={styled.aboutMeRow}>
                        <div className={styled.workExperience}>
                            <h3>Doświadczenie w pracy</h3>
                            <p>
                                W swojej pracy na co dzień wykorzystuję technologie takie
                                jak <strong>Vue</strong> , <strong>Vanilla
                                JavaScript </strong>oraz <strong>TypeScript</strong>. Tworzę strony internetowe na
                                podstawie
                                projektów przygotowanych w <strong>Figma</strong>, dbając
                                o ich zgodność z założeniami UX/UI.
                            </p>
                            <p>
                                Rozwijam aplikacje webowe, budując nowe moduły i integrując różne zewnętrzne biblioteki.
                                Mam
                                doświadczenie w tworzeniu dashboardów z wykorzystaniem Chart.js, budowaniu intuicyjnych
                                interfejsów użytkownika oraz implementacji komunikacji z API.
                            </p>
                            <p>
                                Dbam o jakość kodu, pisząc testy <strong>end-to-end
                                przy</strong> użyciu <strong>Cypress</strong>, co pozwala na wczesne
                                wykrywanie błędów i zapewnienie niezawodności aplikacji.
                            </p>
                        </div>
                        <div className={styled.otherExpirience}>
                            <h3>Doświadczenie poza pracą</h3>
                            <p>
                                Poza codziennymi obowiązkami zawodowymi rozwijam swoje umiejętności, eksplorując nowe
                                technologie i realizując własne projekty. Ukończyłem kurs <strong>"Zrozumieć
                                React"</strong>, a zdobyta
                                wiedza pozwoliła mi stworzyć kilka projektów w tej technologii.
                            </p>
                            <p>
                                Najwięcej nauczyłem się podczas pracy nad formularzem zgłoszeniowym, zbudowanym
                                w <strong>React </strong>
                                z
                                wykorzystaniem <strong>Firebase</strong>, <strong>SCSS</strong> oraz <strong>TypeScript</strong>.
                                Projekt miał na celu ujednolicenie
                                wyglądu formularzy w sieci salonów. Firebase służył do logowania oraz zapisywania
                                notatek dla danego salonu, a dodatkowe funkcjonalności obejmowały eksport danych do
                                Excela oraz generowanie plików PDF.
                            </p>
                            <p>
                                Dodatkowo uczę się języka <strong>Swift</strong> oraz <strong>React Native</strong>, planując w przyszłości stworzenie
                                własnej aplikacji mobilnej. Mam dużą motywację do dalszego doskonalenia się i poznawania
                                nowych technologii, co pozwala mi na ciągły rozwój w świecie programowania.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}