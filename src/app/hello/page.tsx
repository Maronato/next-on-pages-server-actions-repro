"use server";
import { myAction } from "@/actions";
import MyComponent from "../MyComponent";

export default async function Hello() {
  return <MyComponent action={myAction} />;
}
