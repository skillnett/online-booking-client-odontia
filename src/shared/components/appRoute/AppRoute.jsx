import React, { useRef } from 'react'
import { Route } from 'react-router'
import cn from 'classnames'
import { isMobile } from 'react-device-detect'

export const AppRoute = ({ path, exact = false, component }) => {
    const Component = component

    const scrollbarRef = useRef(null)

    const executeScroll = () => scrollbarRef.current.scrollIntoView()
    const scrollTop = () => executeScroll()

    return (
        <Route
            exact={exact}
            path={path}
            render={props => (
                <div
                    className={cn(
                        'app__container',
                        isMobile && 'app__container--mobile'
                    )}
                >
                    <div
                        className={cn(
                            isMobile
                                ? 'app__mobile-container'
                                : 'app__web-container'
                        )}
                    >
                        <div ref={scrollbarRef} />
                        <Component {...props} scrollTop={scrollTop} />
                    </div>
                </div>
            )}
        />
    )
}
