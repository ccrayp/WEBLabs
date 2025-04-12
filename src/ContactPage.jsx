export default function ContactPage(){
    return (
        <div class="page-content p-3">
            <h2>Контакты</h2>
            <form>
                <div class="mb-3">
                    <label class="form-label">Ваше имя</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control"/>
                </div>
                <button type="submit" class="btn btn-primary">Отправить</button>
            </form>
        </div>
    )
}