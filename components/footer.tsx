import Container from './container'
import MenuFooter from './menu/footer'

const Footer = () => {
  return (
    <footer className="section">
            <div className="container">
                <div className="pb-4 is-flex is-flex-wrap-wrap is-justify-content-between is-align-items-center">
                    <div className="mr-auto mb-2">
                        <a className="is-inline-block" href="#">
                            <img className="image" src="/img/logo.png" alt="" width="96px"/>
                        </a>
                    </div>
                    <div>
                        <ul className="is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center">
                            <MenuFooter/>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pt-5" style={{borderTop: "1px solid #dee2e6"}}></div>
            <div className="container">
                <div className="is-flex-tablet is-justify-content-between is-align-items-center">
                    <p></p>
                    <div className="py-2 is-hidden-tablet"></div>
                    <div className="ml-auto">
                        <a className="mr-4 is-inline-block" >
                        </a>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer
