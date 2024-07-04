"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Books", [
            {
                name: "The Hobbit",
                author: "J.R.R Tolkien",
                year_published: 1937,
            },
            {
                name: "Harry Potter and the Sorcerer's Stone",
                author: "J.K. Rowling",
                year_published: 1997,
            },
            {
                name: "The Great Gatsby",
                author: "F. Scott Fir",
                year_published: 1925,
            },
            {
                name: "1984",
                author: "George Orwell",
                year_published: 1949,
            },
        ])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Books", null, {});
    },
};
