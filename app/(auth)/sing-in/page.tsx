/* eslint-disable @next/next/no-img-element */
import './sign-in.scss';

export default function SingIn() {
  return (
    <>
      <div className='sign-in'>
        <div className='sign-in__logo'>
          <img src='./images/logo.png' className='sign-in__img' alt='no imgage' />

          <div className='sign-in__main'>
            <h1 className='sign-in__title'>Đăng nhập</h1>

            <form className='sign-in__form-login'>
              <input type='email' placeholder='Nhập gmail' className='sign-in__form-username' />
              <input type='password' placeholder='Nhập mật khẩu' className='sign-in__form-password' />
              <a className='sign-in__link'>Quên mật khẩu?</a>
              <button className='sign-in__btn-login'>ĐĂNG NHẬP</button>
            </form>

            <div className='sign-in__divider'>
              <hr className='sign-in__hr' />
              <span className='sign-in__other'>Hoặc đăng nhập bằng</span>
              <hr className='sign-in__hr' />
            </div>

            <div className='sign-in__login-account'>
              <div className='sign-in__login-account__item'>
                <img className='sign-in__login-account__img' src='./images/face.jpg' alt='No image' />
                <span className='sign-in__login-account__facebook'>Facebook</span>
              </div>

              <div className='sign-in__login-account__item'>
                <img className='sign-in__login-account__img' src='./images/google.jpg' alt='No image' />
                <span className='sign-in__login-account__facebook'>Google</span>
              </div>

              <div className='sign-in__login-account__item'>
                <img className='sign-in__login-account__img' src='./images/apple.png' alt='No image' />
                <span className='sign-in__login-account__facebook'>Apple ID</span>
              </div>

            </div>

            <div className='sign-in__footer'>
              <span className='sign-in__footer-left'>Chưa có tài khoản?</span>
              <a className='sign-in__footer-right'>Đăng ký tài khoản mới</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
