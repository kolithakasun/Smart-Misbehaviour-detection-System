import React, {Component} from 'react';
import './FooterStyle.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
               <div className="row mt-5 p-2">
                    <div className="col copyright" align="center">
                        <h6 className="text-white-50 mt-2">
                        © 2020 Developed by <a href="https://www.linkedin.com/in/kolithakasun/" target="_blank" rel="noopener noreferrer">Kolitha Dasanayaka</a>
                        </h6>

                    </div>
                </div>

            </div>
        );
    }
}

export default Footer;