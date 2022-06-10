import {gql} from '@apollo/client';
import {apolloClient} from './apolloClient';

export const registerQuery = ({name, email}: {name: string; email: string}) =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation {
          signUpWithEmail(
            name: "${name}"
            email: "${email}"
            password: "p4SSW0rd"
          ) {
            user {
              id
              email
              name
              facebookId
              googleId
              appleId
            }
            accessToken
            refreshToken
          }
        }
      `,
    })
    .then(e => e.data.signUpWithEmail);

export const loginQuery = (email: string) =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation {
          loginWithEmail(email: "${email}", password: "p4SSW0rd") {
            user {
              id
              email
              name
              facebookId
              googleId
              appleId
            }
            accessToken
            refreshToken
          }
        }
      `,
    })
    .then(e => e.data.loginWithEmail);

export const createCardQuery = (name: string) =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation {
          createCard(
            data: {
              name: "${name}"
              minPrice: null
              maxPrice: null
              locationTypeIds: []
              locationCuisineTypeIds: []
              dishTypeIds: []
              courseTypeIds: []
              dietIds: []
              excludedIngredientIds: []
            }
          ) {
            id
            name
          }
        }
      `,
    })
    .then(e => e.data.createCard);

export const cardsQuery = () =>
  apolloClient
    .query({
      query: gql`
        query {
          cards {
            id
            name
          }
        }
      `,
    })
    .then(e => e.data.cards);

export const deleteCardQuery = (id: number) =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation {
          deleteCard(
            id: ${id}
          )
        }
      `,
    })
    .then(e => e.data.deleteCard);

export const shareCardQuery = (id: number) =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation {
          shareCard(
            id: ${id}
          )
        }
      `,
    })
    .then(e => e.data.shareCard);

export const duplicateCardQuery = (id: number) =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation {
          duplicateCard(id: ${id}) {
            id
            name
          }
        }
      `,
    })
    .then(e => e.data.duplicateCard);
