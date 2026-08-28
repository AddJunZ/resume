import paymentImage from '../../assets/payment.jpeg';

const Blog = () => (
  <div className='flex flex-col items-center' style={{ height: '100vw' }}>
    <div style={{ marginTop: '48px' }}>Pay for it and it will show.</div>
    <img
      src={paymentImage}
      alt='Payment QR code'
      style={{ width: '40vw', height: '50vw', marginTop: '48px' }}
    />
  </div>
);

export default Blog;
