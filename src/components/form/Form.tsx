import Step1Form from "./stepOne.tsx";
import './styles/form.css';

function Form() {
  const handleStep1Submit = (data: any) => {
    console.log("Step 1 data:", data);
  };

  return (
    <>
      <h1 className="useCase">User Registration</h1>
      <Step1Form onSubmit={handleStep1Submit} />
    </>
  );
}

export default Form;
