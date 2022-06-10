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

export const loginQuery = () =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation {
          loginWithEmail(email: "john@doe.com", password: "p4SSW0rd") {
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
