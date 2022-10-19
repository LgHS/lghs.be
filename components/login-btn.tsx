import { useSession, signIn, signOut } from "next-auth/react"
import React, { useState } from "react";
export default function Component() {
    const [collapse, setCollapse] = useState(false);
    const { data: session } = useSession()
    if (session) {
        return (
        <>
        <div className={'dropdown '+ (collapse ? 'is-active': '')}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2" onClick={() => setCollapse(collapse ? false : true)}>
                    <span>{session.user.name}</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                    <a className="dropdown-item" onClick={() => signOut()}>Déconnexion</a>
                </div>
            </div>
        </div>
            
        </>
        )
    }
    return (
        <>
            <button className="button is-primary" onClick={() => signIn('keycloak')}>Connexion</button>
        </>
    )
}