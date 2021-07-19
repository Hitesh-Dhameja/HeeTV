import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer>
                <div class="footer-top-wrap bg-dark">
                    <div class="container">
                        <div class="footer-menu-wrap">
                            <div class="row align-items-center">
                                <div class="col-lg-3">
                                    <div class="footer-logo">
                                        <a href="/"><img src="https://cdn6.aptoide.com/imgs/c/0/0/c009d398556ab5ab9d124727b471e3c6_icon.png" height="80px" width="120px" alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-lg-9">
                                    <div class="footer-menu">
                                        <nav>
                                            <ul class="navigation">
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/">Movie</a></li>
                                                <li><a href="/">Tv Show</a></li>
                                                <li><a href="/">Pricing</a></li>
                                            </ul>
                                            <div class="footer-search">
                                                <form action="#">
                                                    <input type="text" placeholder="Find Favorite Movie" />
                                                    <button><i class="fas fa-search"></i></button>
                                                </form>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-quick-link-wrap">
                            <div class="row align-items-center">
                                <div class="col-md-7">
                                    <div class="quick-link-list">
                                        <ul>
                                            <li><a href="/">FAQ</a></li>
                                            <li><a href="/">Help Center</a></li>
                                            <li><a href="/">Terms of Use</a></li>
                                            <li><a href="/">Privacy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="footer-social">
                                        <ul>
                                            <li><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="/"><i class="fab fa-pinterest-p"></i></a></li>
                                            <li><a href="/"><i class="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-wrap">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="copyright-text">
                                    <p>Copyright © 2021. All Rights Reserved By <a href="/">HeeTV</a></p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="payment-method-img text-center text-md-right">
                                    <img src="https://themebeyond.com/html/movflx/img/images/card_img.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
