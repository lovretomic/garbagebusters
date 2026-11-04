export const passwordRules = [
	{id: "length", label: "Najmanje 8 znakova", test: (p: string)=> p.length>=8},
	{id: "number", label: "Najmanje jednu znamenku", test: (p: string) => /\d/.test(p)},
	{id: "special", label: "Najmanje jedan poseban znak", test: (p: string) =>  /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(p)}
]

export const isPasswordValid = (password: string) =>
  passwordRules.every((rule) => rule.test(password));