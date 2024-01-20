import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SingnUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log('e.target.value:', e.target.id, e.target.value);
    setFormData((pref) => ({ ...pref, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);
    if (!formData.username || !formData.email || !formData.password) {
      console.log('error');
      setLoading(false);
      return setErrorMessage('Please fill out all fields.');
    }

    console.log('サブミット');
    try {
      const res = await axios.post('/api/auth/signup', formData);
      console.log('リターン値', res.data);
      setLoading(false);
      navigate('/sign-in');
    } catch (err) {
      console.log('エラー', err);
      setErrorMessage(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Sahand's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@example.com"
                id="email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              outline
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an acount?</span>
              <Link to="/sign-in" className="text-blue-500">
                Sign In
              </Link>
            </div>
          </form>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingnUp;
