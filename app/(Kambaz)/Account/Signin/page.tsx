"use client";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { setEnrollments } from "../../Enrollments/reducer"; // <-- import this
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";
import Link from "next/link";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = () => {
    const user = db.default.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    if (!user) return;

    // Initialize the user's enrollments
    const userEnrollments = db.default.enrollments.filter(
      (e: any) => e.user === user._id
    );

    dispatch(setCurrentUser(user));
    dispatch(setEnrollments(userEnrollments)); // <-- update Redux store

    router.push("/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl
        defaultValue={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="mb-2"
        placeholder="username"
        id="wd-username"
      />
      <FormControl
        defaultValue={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="mb-2"
        placeholder="password"
        type="password"
        id="wd-password"
      />
      <Button onClick={signin} id="wd-signin-btn" className="w-100">
        Sign in
      </Button>
      <Link id="wd-signup-link" href="/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}
