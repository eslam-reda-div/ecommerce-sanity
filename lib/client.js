import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'azfdx77a',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
  token: 'sk9G2RnhGkFaw2ttYVHuY2JE8Y4YfLrNHo6kFWmqMvKF1jlNZhjmqfGDrmh8cbkger5EEyNJYJITTQOyOe1NUOGFpidW4m5l94v6fnBZxf6YMTlv8YUrgddULE6msnpfoNTaA7vXIMtuGPTxdLIN5axLSJtLvaaHYC8UwzS8m4LcmZwAom5Y'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);