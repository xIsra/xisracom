export function getRandomGreetings(): string {
    const greetings = [
        'Welcome!',
        'Hello!',
        'Hi!',
        'Hola!',
        'Bonjour!',
        'Ciao!',
        'Namaste!',
        'Konnichiwa!',
        'Guten Tag!',
        'Salaam!',
        'Shalom!',
        'Szia!',
        'Merhaba!',
        'Saluton!',
        'Zdravo!',
        'Hej!',
        'Hei!',
        'Ahoj!',
        'Halo!',
        'Olá!',
        'Hej!',
        'Tere!',
        'Salut!',
        'Sveiki!',
        'Sawubona!',
        'Jambo!',
        'Habari!',
        'Kamusta!',
        'Konnichiwa!',
        'Annyeong!'
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
}

export function getRandomGoodbyes(): string {
    const goodbyes = [
        'Goodbye!',
        'Bye!',
        'See you later!',
        'See you soon!',
        'See you!',
        'Take care!',
        'Farewell!',
        'Adios!',
        'Au revoir!',
        'Arrivederci!',
        'Namaste!',
        'Sayonara!',
        'Auf Wiedersehen!',
        'Khuda Hafiz!',
        'Shalom!',
        'Hasta la vista!',
        'Hasta luego!',
        'Hasta pronto!',
        'Hasta mañana!',
        'Arrivederci!',
        ];
    return goodbyes[Math.floor(Math.random() * goodbyes.length)];
}
