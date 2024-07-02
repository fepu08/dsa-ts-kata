import { restoreIpAddresses } from '../problems/restore_ip_address';

test('Restore IP address', () => {
  const input = '25525511135';
  const expected = ['255.255.11.135', '255.255.111.35'];

  const result = restoreIpAddresses(input);

  expect(result).toEqual(expected);
});
