import { supabase } from "../../src/utils/SupabaseClient";

export default async function registerUser(req: any, res: any) {
  // destructure the e-mail and password received in the request body.
  const { email, password } = req.body;

  //make a SignUp attempt to Supabase and
  // capture the user (on success) and/or error.

  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  // Send a 400 response if something went wrong
  if (error) return res.status(401).json({ error: error.message });
  // Send 200 success if there were no errors!
  // and also return a copy of the object we received from Supabase
  res.status(200).json({ user: data });
}
