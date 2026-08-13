// Source: https://javascript.info/recursion

/**
 * What is a recursive structure:
 * A recursive data structure is a structure that replicates itself in
 * parts. These components are predictable.
 *
 * For the webs, HTML documents could be seen as a recursive structure,
 * because an HTML tag contains:
 * * Text pieces
 * * Comments
 * * Other HTML tags
 */

// The example provided is a recursive structure:

const company = {
    sales: [
        {
            name: 'John',
            salary: 1000
        },
        {
            name: 'Alice',
            salary: 1600
        }
    ],

    development: {
        sites: [
            {
                name: 'Peter',
                salary: 2000
            },
            {
                name: 'Alex',
                salary: 1800
            }
        ],

        internals: [
            {
                name: 'Jack',
                salary: 1300
            }
        ]
    }
};

function collectNames(department) {
    if (Array.isArray(department)) {
        return department.map(person => person.name);
    } else {
        let names = [];
        for (let subdep of Object.values(department)) {
            // Array.concat() is a method for flattening arrays
            names = names.concat(collectNames(subdep));
        }
        return names;
    }
}

const res = collectNames(company);
res;
