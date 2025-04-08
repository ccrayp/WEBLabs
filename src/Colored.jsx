// Компонент Block для отображения одного блока
function Block({ name, hex }) {
    return (
        <div className="block" style={{lineHeight: '50px', height: '50px', backgroundColor: hex, padding: '20px', margin: '10px', color: '#fff', borderRadius: '5px' }}>
            <span>{name}</span>
        </div>
    );
}

// Главный компонент Colored с коллекцией блоков
function Colored() {
    const colors = [
        { name: 'Красный', hex: "#FF0000" },
        { name: 'Зеленый', hex: "#32CD32" },
        { name: 'Синий', hex: "#0000FF" },
        { name: 'Желтый', hex: "#FFFF00" },
        { name: 'Фиолетовый', hex: "#4B0082" },
        { name: 'Оранжевый', hex: "#FFA500" }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Цветные блоки</h1>
            <div style={{ display: 'flex', justifyContent: 'flex-start', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                {colors.map(element => (
                    <Block
                        key={element.hex} // Уникальный ключ для каждого элемента
                        name={element.name}
                        hex={element.hex}
                    />
                ))}
            </div>
        </div>
    );
}
