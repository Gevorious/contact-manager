import { FieldMeta } from "@tanstack/react-form";

const FieldInfo = ({ fieldMeta }: { fieldMeta: FieldMeta | undefined }) => {
  if (!fieldMeta) return null;

  return (
    <div className='relative'>
      {fieldMeta.isTouched && fieldMeta.errors.length ? (
        <p className="text-red-500 absolute text-sm mt-1">
          {fieldMeta.errors.join(",")}
        </p>
      ) : null}
      {fieldMeta.isValidating ? "Validating..." : null}
    </div>
  );
}

export default FieldInfo;