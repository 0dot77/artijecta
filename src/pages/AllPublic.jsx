import styled from 'styled-components';

const Layout = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #000000;

  iframe {
    background-color: #000000;
  }
`;

const AllPublic = () => {
  return (
    <Layout>
      <iframe
        src="https://drive.google.com/file/d/1qSaApG8GEXV2bPn7iG4z8pu0aooippXJ/preview"
        width="100%"
        height="100%"
        allow="autoplay"
      ></iframe>
    </Layout>
  );
};

export default AllPublic;
