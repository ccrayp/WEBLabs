export default function ContactPage(){
    return (
        <div className="page-content p-3">
            <h2>Контакты</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Ваше имя</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Отправить</button>
            </form>
        </div>
    )
}