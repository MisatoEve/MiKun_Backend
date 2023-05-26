import { faker } from "@faker-js/faker";

faker.localeFa = 'es';

export const generateUsers = () => {
    let numOfProducts = parseInt(faker.string.numeric(1, {bannedDigits: ['0']}))
    let products = [];
    for (let i = 0; i < numOfProducts; i++) {
        products.push(generateProducts());
    }

    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        id: faker.database.mongodbObjectId(),
        products
    }
}

export const generateProducts = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        stock: faker.string.numeric(1),
        id: faker.database.mongodbObjectId(),
        thumbnail: faker.image.imageUrl()
    }
}

export const generateOneUser = () => {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: 'secret'
    }
}