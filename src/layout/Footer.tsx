const Footer = () => {
  return (
    <footer className="md:mt-0 md:py-20 px-5 md:px-60 flex flex-col gap-10 py-10 border-t border-secondary-600">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        <div>
          <h3 className="text-neutral font-black text-[14px] md:text-[16px] mb-3">ABOUT US</h3>
          <div className="text-neutral-200 font-normal text-[12px] md:text-[14px] flex flex-col gap-2">
            <p className="leading-5">Company Details</p>
            <p className="leading-5">Term & Conditions</p>
            <p className="leading-5">Privacy Policy</p>
            <p className="leading-5">Afflicate</p>
          </div>
        </div>
        <div>
          <h3 className="text-neutral font-black text-[14px] md:text-[16px] mb-3">HELP</h3>
          <div className="text-neutral-200 font-normal text-[12px] md:text-[14px] flex flex-col gap-2">
            <p className="leading-5">F.A.Q (Frequently Asked Questions)</p>
            <p className="leading-5">AML/KYC Policy</p>
            <p className="leading-5">Refund Policy</p>
            <p className="leading-5">Dispute Resolution</p>
          </div>
        </div>
        <div>
          <h3 className="text-neutral font-black text-[14px] md:text-[16px] mb-3">OUR PRODUCTS</h3>
          <div className="text-neutral-200 font-normal text-[12px] md:text-[14px] flex flex-col gap-2">
            <p className="leading-5">Product</p>
            <p className="leading-5">Contact</p>
            <p className="leading-5">Price</p>
            <p className="leading-5">Sales</p>
          </div>
        </div>
        <div>
          <h3 className="text-neutral font-black text-[14px] md:text-[16px] mb-3">CONTACT US</h3>
          <div className="text-neutral-200 font-normal text-[12px] md:text-[14px] flex flex-col gap-2">
            <p className="leading-5">support@xiaomi.email</p>
            <p className="leading-5">affiliate@xiaomi.com</p>
            <img src="/images/install-app.png" alt="" className="w-[151px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div className="flex gap-2">
          <img src="/images/18-plus.png" alt="18 plus" />
          <img src="/images/secure.png" alt="18 plus" />
        </div>
        <p className="text-neutral-200 text-[12px] md:text-[14px] leading-5 font-normal text-center md-text-left">
          For designated models of Xiaomi smartphone, you can enjoy the warranty
          services for your device at designated Xiaomi.
        </p>
      </div>
      <p className="text-neutral-200 text-[12px] md:text-[14px] leading-5 font-normal text-center md:text-left">
        Customers should provide a valid purchase proof and warranty card. After
        inspected by the Xiaomi authorizedservice center and confirmed that the
        smartphone meets the warranty conditions, you can enjoy the in-warranty
        service for free².Warranty determination rules are subjected to the
        local service center.
      </p>

      <p className="text-neutral-200 text-[12px] md:text-[14px] leading-5 font-normal text-center bg-secondary-800 py-4 rounded-xl">
        © Copyright 2025. All Rights Reserved
      </p>
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <img src="/images/visa.png" alt="Visa icon" />
        <img src="/images/mastercard.png" alt="Mastercard icon" />
        <img src="/images/astropay.png" alt="Astropay icon" />
        <img src="/images/interac.png" alt="Interac icon" />
        <img src="/images/jetonban.png" alt="Jetonban icon" />
      </div>
    </footer>
  );
};

export default Footer;
