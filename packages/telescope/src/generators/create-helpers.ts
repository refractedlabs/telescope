import { join, dirname } from 'path';
import { sync as mkdirp } from 'mkdirp';
import { TelescopeBuilder } from '../builder';
import pkg from '../../package.json';
import { writeContentToFile } from '../utils/files';
import { external, internal, reactQuery } from '../helpers';

const version = process.env.NODE_ENV === 'test' ? 'latest' : pkg.version;
const header = `/**
* This file and any referenced files were automatically generated by ${pkg.name}@${version}
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/
\n`;

const write = (
    builder: TelescopeBuilder,
    indexFile: string,
    content: string
) => {
    const indexOutFile = join(builder.outPath, indexFile);
    mkdirp(dirname(indexOutFile));
    writeContentToFile(builder.outPath, builder.options, header + content, indexOutFile);
}

export const plugin = (
    builder: TelescopeBuilder
) => {
    write(builder, 'helpers.ts', internal);

    // should be exported
    write(builder, 'extern.ts', external);

    if (builder.options.reactQuery.enabled) {
        write(builder, 'react-query.ts', reactQuery);
    }
};