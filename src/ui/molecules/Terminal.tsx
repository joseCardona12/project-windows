import UseTerminal from "@/hooks/useTerminal";

export default function Terminal(): React.ReactNode {
  const {
    commandLines,
    inputRefs,
    focusIndex,
    handleInputChange,
    handleKeyDown,
    handleFocus,
    errors,
    outputs,
  } = UseTerminal();
  return (
    <div className="flex flex-col gap-2 h-full overflow-y-scroll scroll-custom p-2">
      {commandLines.map((command, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex gap-2">
            <p>C:\Users></p>
            <input
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              type="text"
              placeholder="Enter command line..."
              className="w-full outline-none"
              value={command}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={() => handleFocus(index)}
              disabled={index !== focusIndex}
              autoComplete="off"
            />
          </div>
          {errors[index] && (
            <div className="text-red-500 text-sm">
              The command "{command}" is not recognized.
            </div>
          )}
          {outputs[index] && !errors[index] && (
            <div className="text-green-400 text-sm whitespace-pre-wrap">
              {outputs[index]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
