import { Button } from './Button';

/**
 * ButtonGrid Component
 * Renders all calculator buttons in a grid layout
 */
export const ButtonGrid = ({
  onNumber,
  onDecimal,
  onOperation,
  onEquals,
  onClear,
  onDelete,
}) => (
  <div className="grid grid-cols-4 gap-3">
    {/* Row 1 */}
    <Button
      value="AC"
      onClick={onClear}
      dataAction="clear"
      className="bg-red-500/70 hover:bg-red-600/80 text-white backdrop-blur-sm"
    />
    <Button
      value="DEL"
      onClick={onDelete}
      dataAction="del"
      className="bg-orange-500/70 hover:bg-orange-600/80 text-white backdrop-blur-sm"
    />
    <Button
      value="÷"
      onClick={() => onOperation('÷')}
      dataAction="/"
      className="bg-blue-500/70 hover:bg-blue-600/80 text-white backdrop-blur-sm"
    />
    <Button
      value="×"
      onClick={() => onOperation('×')}
      dataAction="*"
      className="bg-blue-500/70 hover:bg-blue-600/80 text-white backdrop-blur-sm"
    />

    {/* Row 2 */}
    <Button
      value="7"
      onClick={() => onNumber('7')}
      dataKey="7"
      className="bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/15 text-gray-800 dark:text-white backdrop-blur-sm"
    />
    <Button
      value="8"
      onClick={() => onNumber('8')}
      dataKey="8"
      className="bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/15 text-gray-800 dark:text-white backdrop-blur-sm"
    />
    <Button
      value="9"
      onClick={() => onNumber('9')}
      dataKey="9"
      className="bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/15 text-gray-800 dark:text-white backdrop-blur-sm"
    />
    <Button
      value="-"
      onClick={() => onOperation('-')}
      dataAction="-"
      className="bg-blue-500/70 hover:bg-blue-600/80 text-white backdrop-blur-sm"
    />

    {/* Row 3 */}
    <Button
      value="4"
      onClick={() => onNumber('4')}
      dataKey="4"
      className="bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/15 text-gray-800 dark:text-white backdrop-blur-sm"
    />
    <Button
      value="5"
      onClick={() => onNumber('5')}
      dataKey="5"
      className="bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/15 text-gray-800 dark:text-white backdrop-blur-sm"
    />
    <Button
      value="6"
      onClick={() => onNumber('6')}
      dataKey="6"
      className="bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/15 text-gray-800 dark:text-white backdrop-blur-sm"
    />
    <Button
      value="+"
      onClick={() => onOperation('+')}
      dataAction="+"
      className="bg-blue-500/70 hover:bg-blue-600/80 text-white backdrop-blur-sm"
    />

    {/* Row 4 */}
    <Button
      value="1"
      onClick={() => onNumber('1')}
      dataKey="1"
      className="bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/15 text-gray-800 dark:text-white backdrop-blur-sm"
    />
    <Button
      value="2"
      onClick={() => onNumber('2')}
      dataKey="2"
      className="bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/15 text-gray-800 dark:text-white backdrop-blur-sm"
    />
    <Button
      value="3"
      onClick={() => onNumber('3')}
      dataKey="3"
      className="bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/15 text-gray-800 dark:text-white backdrop-blur-sm"
    />
    <Button
      value="="
      onClick={onEquals}
      dataAction="equals"
      className="bg-green-500/70 hover:bg-green-600/80 text-white backdrop-blur-sm row-span-2"
    />

    {/* Row 5 */}
    <Button
      value="0"
      onClick={() => onNumber('0')}
      dataKey="0"
      span={true}
      className="bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/15 text-gray-800 dark:text-white backdrop-blur-sm"
    />
    <Button
      value="."
      onClick={onDecimal}
      dataAction="."
      className="bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/15 text-gray-800 dark:text-white backdrop-blur-sm"
    />
  </div>
);
