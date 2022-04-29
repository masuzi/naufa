const usernames = ["ealush", "codechips"];

export const doesUserExist = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usernames.includes(`${username}`.toLowerCase()) ? reject() : resolve();
    }, 2000);
  });
};

<script>
  import classNames from "vest/classNames";
  import validate from "./validate";

  import Input from "./components/Input.svelte";
  import Button from "./components/Button.svelte";
  import Checkbox from "./components/Checkbox.svelte";

  export let values = {};
  export let submit = () => {};

  let errors = {};
  let warnings = {};
  // we copy the supplied for values to our form state
  // this is a good practice and helps us with resetting the form
  let formState = { ...values };

  let usernamePending = false;

  // initial empty validation state
  let result = validate.get();

  const check = ({ target: { name } }) => runValidate(name);

  const runValidate = name => {
    result = validate(formState, name);

    // extract errors and warnings
    errors = result.getErrors();
    warnings = result.getWarnings();

    // username validation is async and needs special treatement
    if (name === "username") {
      usernamePending = true;
      // for async validation we need to user the done hook
      result.done(() => {
        errors = result.getErrors();
        warnings = result.getWarnings();
        usernamePending = false;
        // reassignment is needed for reactive cn statement
        result = result;
      });
    }
  };

  const reset = () => {
    validate.reset();
    result = validate.get();
    errors = {};
    warnings = {};
    formState = { ...values };
  };

  const onSubmit = () => {
    runValidate();
    if (result.hasErrors()) return;
    submit(formState);
    // reset form state
    reset();
  };

  // Vest css class helper utility
  $: cn = classNames(result, {
    warning: "warning",
    invalid: "invalid",
    valid: "valid"
  });

  // reactive variable for the submit button
  $: disabled = result.hasErrors();
</script>

<form on:submit|preventDefault={onSubmit} id="example-form" class="col-xs-10 col-lg-6">
  <h2>Authentication</h2>
  <Input
    name="username"
    label="Username"
    pending={usernamePending}
    class={cn('username')}
    placeholder="try: ealush or codechips"
    {errors}
    bind:value={formState.username}
    onInput={check}
  />
  <Input
    name="password"
    label="Password"
    class={cn('password')}
    errors={{ ...errors, ...warnings }}
    bind:value={formState.password}
    onInput={check}
  />
  <Input
    name="confirm_password"
    label="Confirm Password"
    {errors}
    class={cn('confirm_password')}
    bind:value={formState.confirm_password}
    onInput={check}
  />
  <Input
    name="email"
    label="Email"
    {errors}
    class={cn('email')}
    bind:value={formState.email}
    onInput={check}
  />
  <Checkbox
    name="tos"
    label="I have read and agreed to the terms of service."
    class={cn('tos')}
    onChange={check}
    bind:checked={formState.tos}
  />
  <footer>
    <Button class="btn-submit" type="submit" {disabled}>Submit</Button>
  </footer>
</form>
