"use server"

export async function myAction(
  _prev?: unknown,
  _formData?: unknown,
): Promise<string> {

  return `Hello World ${new Date().toISOString()}`
}
