import { reject } from 'lodash';
import { Widgets } from './dbConnectors'; // we specify and run the connection from the DB file

// resolvers - functions that interact with the _databases_ and retrieve data to the user
//  all return and input type should match with teh schema definition in the GraphQL
//  so we here define the 'executive' part of our API
//  to run all that code we should structure the data

export const resolvers = {
  // QUERY // here are all the possible calls for query actions
  getProduct: ({ id }) => {
    return new Promise((resolve) => {
      Widgets.findById({ _id: id }, (err, product) => {
        if (err) reject(err)
        else resolve(product)
      })
    });
  },
  getAllProducts: () => {
    return Widgets.find({})
  },

  // MUTATION // here are all possible calls for mutation actions, which change the data
  createProduct: ({ input }) => {
    const newWidget = new Widgets({
      name: input.name,
      description: input.description,
      price: input.price,
      soldout: input.soldout,
      inventory: input.inventory,
      stores: input.stores,
    });

    newWidget.id = newWidget._id;

    return new Promise((resolve) => {
      newWidget.save((err) => {
        if (err) reject(err)
        else resolve(newWidget)
      });
    });
  },
  updateProduct: ({ input }) => {
    return new Promise((resolve) => {
      Widgets.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, widget) => {
        if (err) reject(err)
        else resolve(widget)
      })
    })
  },
  deleteProduct: ({ id }) => {
    return new Promise((resolve) => {
      Widgets.remove({ _id: id }, (err) => {
        if (err) reject(err)
        else resolve('Successfully deleted widget')
      })
    })
  }
};

export default resolvers;
