import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';

function Footer(){
    return(
        <footer class="bg-dark text-center text-white footer-class">
            <div class="container p-4 pb-0">
                <section class="mb-4">
                    <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/anandhu720" role="button"><GitHubIcon /></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/_a_na_ndhu__/" role="button"><InstagramIcon/></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/anandha-krishnan-8077551b8/" role="button"><LinkedInIcon/></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/channel/UC96oKCVjPGoc0eG_-ExN_Ew" role="button"><YouTubeIcon /></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="mailto:anandhu4310@gmail.com" role="button"><EmailIcon /></a>
                </section>
            </div>
            <div class="text-center p-3 last-footer">
                © 2021 Copyright:Anandha Krishnan
           
            </div>
        </footer>
    );
}

export default Footer;