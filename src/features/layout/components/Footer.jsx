import { Container } from '@mui/material';
import React, { Component } from 'react';

import { Logo } from './';

type Props = {
    isShowDrawer: Boolean,
};

/**
 * Class for main Footer component.
 *
 * @abstract
 */
class Footer extends Component<Props> {
    /**
     * Implements React's {@link Component#render}.
     *
     * @inheritdoc
     */
    render() {
        const { isShowDrawer } = this.props;

        return (
            <footer className = { `footer ${isShowDrawer ? 'footer_indent' : ''}` }>
                <Container className = 'footer__container'>
                    <div className = 'footer__inner'>
                        <Logo
                            className = 'footer__logo'
                            label = { true } />
                        <div className = 'footer__copyright'>
                            <span>© 2021 – 2023 ООО “Центр”</span>
                            <span>Все права защищены</span>
                            <a
                                className = 'footer__link'
                                href = '/'>
                                Политика конфиденциальности
                            </a>
                        </div>
                    </div>
                    <div className = 'footer__contacts'>
                        <a
                            className = 'footer__link'
                            href = 'tel:+78432100480'>
                            +7 (843) 210-0480
                        </a>
                        <a
                            className = 'footer__link'
                            href = 'mailto:market@mintconf.ru'>
                            market@mintconf.ru
                        </a>
                    </div>
                    <div className = 'footer__apps'>
                        <a
                            className = 'footer__link footer__link_app'
                            href = 'https://apps.apple.com/ru/app/id1555719113'
                            rel = 'noreferrer'
                            target = '_blank'>
                            <img
                                alt = 'app-store-app'
                                // eslint-disable-next-line max-len
                                src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAABaCAMAAAAMyCp0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPUExURQAAAKampqampqWlpaampqampqampqampqWlpaSkpKSkpKampqWlpaampqioqKioqKampqCgoGNjYy4uLg4ODgAAAAEBARAQEDY2Nm1tbaampqWlpaWlpXJychISEh0dHYODg1xcXAUFBaenp6enp4mJiaampikpKYCAgExMTB8fHzMzM5CQkNTU1Pr6+sDAwP///zAwMIaGhrCwsK2trXR0dAMDA/39/fz8/HBwcOjo6CsrK7Ozs0JCQt3d3U5OTpaWlsjIyKurq5OTk5qamjk5OXt7e5iYmHh4eFNTUxQUFGpqaj4+Pjw8PAgICERERH9/fyUlJYKCgoyMjBgYGPPz8wsLC87OzsTExPf390lJSSAgIOPj49nZ2dHR0fDw8L+/v+Xl5UBAQODg4CIiIpycnCQkJKioqOvr6xsbG/j4+La2thYWFl9fX7y8vMrKylBQUPHx8X19fUZGRlpaWqOjo4+Pj/7+/lhYWFVVVbm5ufX19dfX1+7u7tra2mdnZ6+vr56enmBgYMbGxnd3dxRZADAAAAAndFJOUwAsis33//DDfR8Ar/+fFABI////////////6DgA////////GAD/ALD5XWAAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA5rSURBVHhe7Z2JXxNZEsdxxnbX0dmVowPMcgg7SBhiUhiuIJfch4DIDQ6nIvchp1wq+odvVb3qTnfopDsQdxzN9/OB9Dv6+vV79eodnWQobv30820tTQLu/OOfd39hMujf3XsSnyYR93/917+RDPx7cEfLzMrO0dPEx5ebl39f++0/BQUFGQUFD25rhUWSkiYBxQ+126hZRsHdO1qJxKVJTGmh9tt/f8/4/Z5WKDFp3Cgt0+49yrilZaZrpWfKNe1Wxk9algTTeMCv/ZTxs5YtoTQeqNB+zrit5UoojQeytdsZmuaTUBoP/KFpKJkE0nghLVnSpECyH61W31SyysDj4A/WeNxMssoQIB4kq3oSDlXXfB8O800kq31SR4rVu9fMCOUDaHgq4b81N5CstFEJ8VjCCWhq9le0tAI8k/DfmutL5mtTikG7RCTAxwWxA+B7GJG7vmT5ohh0SoQrNSJZ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' />
                        </a>
                        <a
                            className = 'footer__link footer__link_app'
                            href = 'https://play.google.com/store/apps/details?id=ru.cg.mint'
                            rel = 'noreferrer'
                            target = '_blank' >
                            <img
                                alt = 'google-play-app'
                                // eslint-disable-next-line max-len
                                src = 'https://meet.mintconf.ru/mint_static/static/media/googleplay.d387b864a69b554187de.png' />
                        </a>
                    </div>
                </Container>
            </footer>
        );
    }
}

export default Footer;
