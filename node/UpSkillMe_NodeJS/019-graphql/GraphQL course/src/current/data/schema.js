import { buildSchema } from "graphql";

const schema = buildSchema( // parses and builds the schema object
    `
    # this is the schema, that defines all possible data structures in the API
    

    type Product {
        id: ID           # special ID type, mostly used from the DB
        name: String
        description: String
        price: Float
        soldout: Soldout
        inventory: Int
        stores: [Store]! # array of Store type, mustn't be null
    }

    enum Soldout {       # definition of the enum type
        SOLDOUT          # possible variants of the status
        ONSALE
    }

    type Store {
        store: String
    }

    type Query {
        # special type Query defines all possible read operations with the database
        # it also specifies what input can we provide and what output we should expect

        getProduct(id: ID): Product  # a query with the parameter 'id' of ID type
        getAllProducts: [Product]    # example of a query without parameters
    }

    input StoreInput { # special input type, used to shorten the definition of query parameters
        store: String
    }

    input ProductInput { # another input type
        id: ID
        name: String
        description: String
        price: Float
        soldout: Soldout
        inventory: Int
        stores: [StoreInput]! # in any case ! means the same as NOT NULL in SQL
    }

    type Mutation {
        # special type Mutation defines all possible 'actions' we can do with the database
        # it defines the input and output we should expect while interacting with the data

        # we can define input not only with the standard types provided by GraphQL
        # but also create our own custom 'input' types for the interaction 

        createProduct(input: ProductInput): Product
        # mutation with the ProductInput object as an input
        # and a product object as an output, usually the final version of created product
        
        updateProduct(input: ProductInput): Product
        
        deleteProduct(id: ID!): String
        # another data mutation with mandatory ID input
        # the result would be a string
    }
`)

export default schema; // export the schema as a single object
