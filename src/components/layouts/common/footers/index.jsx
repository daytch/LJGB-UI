import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import customerservice from '../../../../images/img/customer-service.svg';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    const { layout } = this.props;
    return (
      <footer className="bg-light mt-5 footer__wrapper">
        <div className="container footer__inner">
          {/* <div className="row"> */}
          {/* <div className="col-lg-9">
              <div className="footer__desc">
                <div>
                  <img
                    src="https://www.rajamobil.com/themes/rmperjuangan/images/logo/logo-footer-new.svg"
                    alt=""
                    title="Lojualguebeli.com"
                  />
                </div>
                <p>
                  RajaMobil.com adalah portal mobil. Portal ini memudahkan
                  pengunjung dalam proses jual-beli mobil baru dan bekas yang
                  tersaji eksklusif dengan gambar menarik dan informasi lengkap.
                  Rajamobil.com juga memiliki banyak fitur menarik yang tentu saja
                  berkaitan dengan bisnis mobil, seperti perhitungan simulasi
                  kredit dan asuransi, serta fitur lainnya.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="socmed">
                <h4>Ikuti kami di</h4>
                <div className="socmed__wrapper">
                  <span className="socmed__icon icon-facebook"></span>
                  <span className="socmed__icon icon-twitter"></span>
                  <span className="socmed__icon icon-youtube"></span>
                  <span className="socmed__icon icon-google-plus"></span>
                  <span className="socmed__icon icon-instagram"></span>
                </div>
              </div>
            </div> */}
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-5 col-sm-6">
                  <h5>Informasi</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <Link to="/">
                        Apa sih <b>lojualguebeli.com</b>?
                      </Link>
                    </li>
                    <li>
                      <Link to="/">Benefit di lojualguebeli.com?</Link>
                    </li>
                    <li>
                      <Link to="/">
                        Bagaimana sistem transaksi sebagai customer?
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        Bagaimana sistem transaksi sebagai sales?
                      </Link>
                    </li>
                    <li>
                      <Link to="/">Profile lojualguebeli.com</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                  <h5>Popular Release</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <Link to="/">Cool stuff</Link>
                    </li>
                    <li>
                      <Link to="/">Random feature</Link>
                    </li>
                    <li>
                      <Link to="/">Team feature</Link>
                    </li>
                    <li>
                      <Link to="/">Stuff for developers</Link>
                    </li>
                    <li>
                      <Link to="/">Another one</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 col-sm-6">
                  <h5>Toyota</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <Link to="/">Resource</Link>
                    </li>
                    <li>
                      <Link to="/">Resource name</Link>
                    </li>
                    <li>
                      <Link to="/">Another resource</Link>
                    </li>
                    <li>
                      <Link to="/">Final resource</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 col-sm-6">
                  <h5>Honda</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <Link to="/">Business</Link>
                    </li>
                    <li>
                      <Link to="/">Education</Link>
                    </li>
                    <li>
                      <Link to="/">Government</Link>
                    </li>
                    <li>
                      <Link to="/">Gaming</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="socmed">
                <h4>Ikuti kami di</h4>
                <div className="socmed__wrapper">
                  <a href={layout.contact.socialMedia.facebook} target="_blank">
                    <span className="socmed__icon icon-facebook"></span>
                  </a>
                  <a href={layout.contact.socialMedia.twitter} target="_blank">
                    <span className="socmed__icon icon-twitter"></span>
                  </a>
                  <a href={layout.contact.socialMedia.youtube} target="_blank">
                    <span className="socmed__icon icon-youtube"></span>
                  </a>
                  <a
                    href={layout.contact.socialMedia.instagram}
                    target="_blank"
                  >
                    <span className="socmed__icon icon-instagram"></span>
                  </a>
                </div>
              </div>
              <div className="customercare">
                <div className="customercare__img">
                  <img src={customerservice} alt="" title="Lojualguebeli.com" />
                </div>
                <div>
                  <span className="title">Customer Care</span>
                  <span className="phone">{layout.contact.contactCenter}</span>
                  <span className="note">Senin-Jumat, 08:00-17:00 WIB</span>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="footer__bottom text-center">
          <span>Copyright &copy;2019 lojualguebeli.com</span>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = state => ({
  layout: state.layoutReducer
});
export default connect(mapStateToProps)(Footer);
