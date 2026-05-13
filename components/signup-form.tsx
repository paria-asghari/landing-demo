"use client";

import { Button, Input, Label, DatePicker, Select, ListBox, RadioGroup, Radio, TextArea, Checkbox } from "@heroui/react";
import { X, Mail, User, Phone, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, DateField } from "@heroui/react";

export function SignUpForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [birthDateError, setBirthDateError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    gender: false,
  });

  const validateName = (value: string) => {
    const nameRegex = /^[a-zA-Z\s\-']+$/;
    return nameRegex.test(value);
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const isFormValid =
    firstName.length > 0 &&
    validateName(firstName) &&
    lastName.length > 0 &&
    validateName(lastName) &&
    email.length > 0 &&
    validateEmail(email) &&
    gender.length > 0 &&
    acceptedTerms;

  const validatePhone = (value: string) => {
    const phoneRegex = /^[0-9+\-\s()]+$/;
    return phoneRegex.test(value) && value.replace(/\D/g, "").length >= 10;
  };

  const validateBirthDate = (value: string) => {
    const date = new Date(value);
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    return value.length > 0 && (age < 10 || age > 120);
  };

  const validatePassword = (value: string) => {
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasSpecialChar = /[@#$%]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    return value.length >= 8 && hasUpperCase && hasLowerCase && hasSpecialChar && hasNumber;
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 max-w-sm w-full mx-4 relative">
      <Link
        href="/"
        className="absolute top-2 right-2 text-slate-400 hover:text-white"
      >
        <X size={20} />
      </Link>
      <h2 className="text-white text-center text-xl mb-4">Sign Up</h2>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">
            First Name <span className="text-red-500">*</span>
          </Label>
          <div className="relative w-full">
            <Input
              placeholder="Enter your first name"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setTouched((prev) => ({ ...prev, firstName: true }));
              }}
              onBlur={() => {
                setFirstNameError(!validateName(firstName));
              }}
              className={`bg-white border rounded-lg text-slate-800 w-full pr-10 ${
                firstNameError ? "border-red-500" : "border-slate-300"
              }`}
            />
            <User className={`absolute right-3 top-1/2 -translate-y-1/2 ${firstNameError ? "text-red-500" : "text-slate-400"}`} size={18} />
          </div>
          {touched.firstName && firstName.length === 0 && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
          {touched.firstName && firstName.length > 0 && !validateName(firstName) && (
            <p className="text-red-500 text-xs mt-1">Please enter a valid name (letters only)</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">
            Last Name <span className="text-red-500">*</span>
          </Label>
          <div className="relative w-full">
            <Input
              placeholder="Enter your last name"
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setTouched((prev) => ({ ...prev, lastName: true }));
              }}
              onBlur={() => {
                setLastNameError(!validateName(lastName));
              }}
              className={`bg-white border rounded-lg text-slate-800 w-full pr-10 ${
                lastNameError ? "border-red-500" : "border-slate-300"
              }`}
            />
            <User className={`absolute right-3 top-1/2 -translate-y-1/2 ${lastNameError ? "text-red-500" : "text-slate-400"}`} size={18} />
          </div>
          {touched.lastName && lastName.length === 0 && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
          {touched.lastName && lastName.length > 0 && !validateName(lastName) && (
            <p className="text-red-500 text-xs mt-1">Please enter a valid name (letters only)</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">
            Email <span className="text-red-500">*</span>
          </Label>
          <div className="relative w-full">
            <Input
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setTouched((prev) => ({ ...prev, email: true }));
              }}
              onBlur={() => {
                setEmailError(!validateEmail(email));
              }}
              className={`bg-white border rounded-lg text-slate-800 w-full pr-10 ${
                emailError ? "border-red-500" : "border-slate-300"
              }`}
            />
            <Mail className={`absolute right-3 top-1/2 -translate-y-1/2 ${emailError ? "text-red-500" : "text-slate-400"}`} size={18} />
          </div>
          {touched.email && email.length === 0 && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
          {touched.email && email.length > 0 && !validateEmail(email) && (
            <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">Phone Number</Label>
          <div className="relative w-full">
            <Input
              placeholder="Enter your phone number"
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setPhoneError(e.target.value.length > 0 && !validatePhone(e.target.value));
              }}
              className={`bg-white border rounded-lg text-slate-800 w-full pr-10 ${
                phoneError ? "border-red-500" : "border-slate-300"
              }`}
            />
            <Phone className={`absolute right-3 top-1/2 -translate-y-1/2 ${phoneError ? "text-red-500" : "text-slate-400"}`} size={18} />
          </div>
          {phoneError && (
            <p className="text-red-500 text-xs mt-1">Please enter a valid phone number (at least 10 digits)</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">Birth Date</Label>
          <DatePicker className="w-full" name="date">
            <DateField.Group fullWidth>
              <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
              <DateField.Suffix>
                <DatePicker.Trigger>
                  <DatePicker.TriggerIndicator />
                </DatePicker.Trigger>
              </DateField.Suffix>
            </DateField.Group>
            <DatePicker.Popover>
              <Calendar aria-label="Birth date">
                <Calendar.Header>
                  <Calendar.YearPickerTrigger>
                    <Calendar.YearPickerTriggerHeading />
                    <Calendar.YearPickerTriggerIndicator />
                  </Calendar.YearPickerTrigger>
                  <Calendar.NavButton slot="previous" />
                  <Calendar.NavButton slot="next" />
                </Calendar.Header>
                <Calendar.Grid>
                  <Calendar.GridHeader>
                    {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                  </Calendar.GridHeader>
                  <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                </Calendar.Grid>
                <Calendar.YearPickerGrid>
                  <Calendar.YearPickerGridBody>
                    {({ year }) => <Calendar.YearPickerCell year={year} />}
                  </Calendar.YearPickerGridBody>
                </Calendar.YearPickerGrid>
              </Calendar>
            </DatePicker.Popover>
          </DatePicker>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-1 flex-1">
            <Label className="text-blue-400 text-sm font-medium">
              Gender <span className="text-red-500">*</span>
            </Label>
            <Select
              className="bg-white border border-slate-300 rounded-lg text-slate-800 w-full"
              selectedKey={gender || undefined}
              onSelectionChange={(key) => {
                setGender(key as string);
                setTouched((prev) => ({ ...prev, gender: true }));
              }}
            >
              <Select.Trigger className="bg-white border border-slate-300 rounded-lg">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="bg-white">
                  <ListBox.Item key="male">Male</ListBox.Item>
                  <ListBox.Item key="female">Female</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
            {touched.gender && gender.length === 0 && (
              <p className="text-red-500 text-xs mt-1">This field is required</p>
            )}
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <Label className="text-blue-400 text-sm font-medium">Marital Status</Label>
            <RadioGroup defaultValue="single" orientation="horizontal" className="flex flex-row gap-4 pt-2">
              <Radio value="single">
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                <Radio.Content>
                  <Label className="text-white">Single</Label>
                </Radio.Content>
              </Radio>
              <Radio value="married">
                <Radio.Control>
                  <Radio.Indicator />
                </Radio.Control>
                <Radio.Content>
                  <Label className="text-white">Married</Label>
                </Radio.Content>
              </Radio>
            </RadioGroup>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-blue-400 text-sm font-medium">Description</Label>
          <TextArea
            placeholder="Write your description here..."
            rows={4}
            className="bg-white border border-slate-300 rounded-lg text-slate-800"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">Password</Label>
          <div className="relative w-full">
            <Input
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(e.target.value.length > 0 && !validatePassword(e.target.value));
              }}
              className={`bg-white border rounded-lg text-slate-800 w-full pr-10 ${
                passwordError ? "border-red-500" : "border-slate-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {passwordError && (
            <p className="text-red-500 text-xs mt-1">Password must be at least 8 characters with uppercase, lowercase, numbers and special characters (@#$%)</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">Confirm Password</Label>
          <div className="relative w-full">
            <Input
              placeholder="Confirm your password"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordError(
                  e.target.value.length > 0 && e.target.value !== password
                );
              }}
              className={`bg-white border rounded-lg text-slate-800 w-full pr-10 ${
                confirmPasswordError ? "border-red-500" : "border-slate-300"
              }`}
            />
            <Lock className={`absolute right-3 top-1/2 -translate-y-1/2 ${confirmPasswordError ? "text-red-500" : "text-slate-400"}`} size={18} />
          </div>
          {confirmPasswordError && (
            <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
          )}
        </div>
        <Checkbox
          id="terms"
          className="text-white"
          isSelected={acceptedTerms}
          onChange={setAcceptedTerms}
        >
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor="terms" className="text-white text-sm">
              I agree to the{" "}
              <Link href="/pages/privacy" className="text-amber-400 hover:text-amber-300">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/pages/terms" className="text-amber-400 hover:text-amber-300">
                Terms & Conditions
              </Link>
            </Label>
          </Checkbox.Content>
        </Checkbox>
        <div className="flex flex-row gap-4 mt-2">
          <Button
            type="button"
            onClick={() => router.push("/")}
            className="bg-slate-600 text-white hover:bg-slate-500 flex-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            isDisabled={!isFormValid}
            className="bg-amber-500 text-slate-800 hover:bg-amber-400 flex-1 disabled:bg-slate-600 disabled:text-slate-400"
          >
            Create Your Account
          </Button>
        </div>
      </form>
      <p className="text-slate-400 text-center text-sm mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-400 hover:text-blue-300">
          Login
        </Link>
      </p>
    </div>
  );
}