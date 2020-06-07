import React from 'react'

function Footer() {
    return(
        <footer id="footer">
            <section id='cta'>
                <h2>Contact</h2>
                <dl className="alt">
                    <dt>Phone</dt>
                    <dd>(347) 893-9310</dd>
                    <dt>Email</dt>
                    <dd><a href="wkevg12@gmail.com">wkevg12@gmail.com</a></dd>
                </dl>
                <ul className="icons">
                    <li><a href="https://github.com/kvnw2020" target='_blank' className="icon brands fa-github alt"><span className="label">GitHub</span></a></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer