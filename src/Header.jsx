export default function Header() {
    return (
    <div className="container-fluid h4 ">
        <div className="navbar bg-primary p-3">
            <div className="col-6">
                <a href="#" className="text-white"><span className="mr-2 text-white bi bi-envelope-open"></span> <span
                    className="d-none d-md-inline-block">info@yourdomain.com</span></a>
                <span className="mx-md-2 d-inline-block"></span>
                <a href="#" className="text-white"><span className="mr-2 text-white bi  bi-telephone-forward"></span>
                    <span className="d-none d-md-inline-block">+7 (960) 1234 5678</span></a>
            </div>
            <div className=" col-6 d-flex justify-content-end">
                <span className="mx-md-2 d-inline-block"></span>
                <a href="#" className="text-white"><span className="mr-2 text-white bi bi-telegram"></span> </a>
            </div>
        </div>
    </div>
    )
}