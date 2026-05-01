import { str, toFixed } from "@lance/core";

export class Number {
	private _number!: number;

	toString(radix?: number): string {
		if (radix === undefined || radix === 10) {
			return str(this._number);
		}
		if (radix < 2 || radix > 36) {
			throw new RangeError(
				"toString() radix argument must be between 2 and 36",
			);
		}
		// Non-decimal radix conversion is not implemented in stdlib yet
		throw new RangeError(
			"toString() radix conversion is not implemented for stdlib",
		);
	}

	toFixed(fractionDigits?: number): string {
		const digits = fractionDigits ?? 0;
		if (digits < 0 || digits > 20) {
			throw new RangeError(
				"toFixed() digits argument must be between 0 and 20",
			);
		}
		return toFixed(this._number, digits);
	}

	toExponential(fractionDigits?: number): string {
		// TODO: add dedicated SQF exponential formatter.
		if (
			fractionDigits !== undefined &&
			(fractionDigits < 0 || fractionDigits > 20)
		) {
			throw new RangeError(
				"toExponential() digits argument must be between 0 and 20",
			);
		}
		return str(this._number);
	}

	toPrecision(precision?: number): string {
		// TODO: add dedicated SQF precision formatter.
		if (precision !== undefined && (precision < 1 || precision > 21)) {
			throw new RangeError(
				"toPrecision() precision argument must be between 1 and 21",
			);
		}
		return str(this._number);
	}

	valueOf(): number {
		return this._number;
	}
}
