import React from 'react'

function Footer() {
  return (
    <div className='bg-white mt-10'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-4 pt-10'>
            <section>
              <nav className='grid gap-y-4'>
              <h6 className='text-lg text-primary-brand-color'>Getir'i indirin!</h6>
                <a href="#">
              <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="App-store" />
                </a>
                <a href="#">
              <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="google-play" />
                </a>
                <a href="#">
              <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="App-gallery" />
                </a>
              </nav>
            </section>
          </div>
        </div>
    </div>
  )
}

export default Footer